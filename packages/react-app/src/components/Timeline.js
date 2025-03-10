import React, { useState, useEffect, useRef } from 'react'
import Blockies from 'react-blockies';
import { Timeline, Typography } from 'antd';
import { SendOutlined, DownloadOutlined, EditOutlined } from  '@ant-design/icons';
const { Text } = Typography;

export default function TimelineDisplay(props) {

  return (
    <Timeline mode="right">

      <Timeline.Item dot={"💾"}>
        <Text delete>
          Clone and Install from the <a target="_blank" href="https://github.com/austintgriffith/scaffold-eth">github repo</a>
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"⚛️"}>
        <Text delete>
          Start your frontend app with: <Text strong>yarn start</Text>
        </Text>
      </Timeline.Item>


      <Timeline.Item dot={"⛓"}>
        <Text delete={props.chainIsUp}>
          Start your local blockchain with: <Text strong>yarn run chain</Text> (and refresh)
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"📝"}>
        <Text delete={props.hasOwner}>
          Compile and deploy your smart contract: <Text strong>yarn run deploy</Text>
        </Text>
      </Timeline.Item>


      <Timeline.Item dot={"🤡"}>
        <Text delete={props.isNotSmoort}>
          Fix error in <Text code>SmartContractWallet.sol</Text> then: <Text strong>yarn run deploy</Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={<SendOutlined style={{ fontSize: '16px' }} />} color={props.hasEther?"green":"blue"}>
        <Text delete={props.hasEther}>
          Send test ether to your <Blockies seed={(props.address?props.address:"").toLowerCase()} size={8} scale={2}/> address using (bottom left) faucet
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={<DownloadOutlined style={{ fontSize: '16px' }} />} color={props.contractHasEther?"green":"blue"}>
        <Text delete={props.contractHasEther}>
          Deposit some funds into your <Blockies seed={(props.contractAddress?props.contractAddress:"").toLowerCase()} size={8} scale={2}/> smart contract wallet
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={<EditOutlined style={{ fontSize: '16px' }} />} color={props.amOwnerOfContract?"green":"blue"}>
        <Text delete={props.amOwnerOfContract}>
          Set <b>owner</b> of your <Blockies seed={(props.contractAddress?props.contractAddress:"").toLowerCase()} size={8} scale={2}/> smart contract wallet to your <Blockies seed={(props.address?props.address:"").toLowerCase()} size={8} scale={2}/> address
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"☢️"}>
        <Text>
          Yikes, anyone can take ownership of <Text code>SmartContractWallet.sol</Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"🔬"}>
        <Text>
          Test your contract with <Text code>buidler/test/myTest.js</Text> then: <Text strong>yarn run test</Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"🚀"}>
        <Text>
          Learn more and fork <a target="_blank" href="https://github.com/austintgriffith/scaffold-eth">this repo</a> to build something amazing!
        </Text>
      </Timeline.Item>

      <Timeline.Item dot={"📖"}>
        <Text>
          Read more about <a target="_blank"  href="https://ethereum.org/developers">Ethereum</a>, <a target="_blank" href="https://solidity.readthedocs.io/en/develop/contracts.html">Solidity</a>, and <a target="_blank" href="https://buidler.dev/tutorial">Buidler</a>
        </Text>
      </Timeline.Item>


      <Timeline.Item dot={"💬"}>
        <Text>
          <a target="_blank" href="https://twitter.com/austingriffith">@ me</a>!
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
