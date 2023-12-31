pragma solidity ^0.8.0;

contract SimpleStorage {
    string public patientName;

    function setPatientName(string memory _name) public {
        patientName = _name;
    }

    function getPatientName() public view returns (string memory) {
        return patientName;
    }
}
