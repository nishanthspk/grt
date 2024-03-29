// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataStorage {
    string public storedData;

    event DataUpdated(string newData);

    constructor(string memory initialData) {
        storedData = initialData;
    }

    function getData() public view returns (string memory) {
        return storedData;
    }

    function setData(string memory newData) public {
        storedData = newData;
        emit DataUpdated(newData);
    }
}
