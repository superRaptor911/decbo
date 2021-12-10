import React, {useEffect, useRef, useState} from 'react';
import {useStore} from '../store';
import VotingContract from '../contracts/Voting.json';
import {initContract} from '../webInit';

const ElectionController = () => {
  const web3 = useStore(state => state.web3);
  const [contract, setContract] = useState();

  const [voters, setVoters] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const voterInputRef = useRef();
  const candidateInputRef = useRef();

  useEffect(() => {
    initContract(VotingContract).then(cont => {
      setContract(cont);
    });
  }, []);

  useEffect(() => {
    if (contract) {
      contract.methods
        .getVoters()
        .call()
        .then(value => {
          console.log('voters are', value);
          setVoters(value);
        });

      contract.methods
        .getCandidates()
        .call()
        .then(value => {
          console.log('candidates are', value);
          setCandidates(value);
        });
    }
  }, [contract]);

  const addVoter = () => {
    const address = voterInputRef.current.value;
    if (web3.utils.isAddress(address)) {
      setVoters([...voters, address]);
    } else {
      console.error('ElectionController::Invalid address ', address);
    }
  };

  const addCandidate = () => {
    const address = candidateInputRef.current.value;
    if (web3.utils.isAddress(address)) {
      setCandidates([...candidates, address]);
    } else {
      console.error('ElectionController::Invalid address ', address);
    }
  };

  const handleSubmit = async () => {
    const address = await web3.eth.getAccounts();
    await contract.methods.addVoters(voters).send({from: address[0]});
    await contract.methods.addCandidates(candidates).send({from: address[0]});
  };

  return (
    <div style={{margin: 100}}>
      <div style={{display: 'flex', marginTop: 20}}>
        <input placeholder="add voter" type="text" ref={voterInputRef} />
        <button onClick={addVoter}>Add Voter</button>
      </div>

      <div style={{display: 'flex', marginTop: 20}}>
        <input
          placeholder="add candidate"
          type="text"
          ref={candidateInputRef}
        />
        <button onClick={addCandidate}>Add Candidate</button>
      </div>
      <button onClick={handleSubmit} style={{marginTop: 10}}>
        Submit
      </button>
      <div>
        <h4>candidates</h4>
        {candidates.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div>
        <h4>voters</h4>
        {voters.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ElectionController;
