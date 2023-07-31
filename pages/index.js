import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Contract } from "web3uikit";
import { useMoralis, useMoralisQuery } from "react-moralis";
import NFTBox from "../components/NFTBox";
import networkMapping from "../constants/networkMapping.json";
import { gql, useQuery } from "@apollo/client";
import GET_ACTIVE_ITEM from "../constants/subgraphQueries";

// const PRICE = "100000000000000000";
// const nftAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
// const TOKEN_ID = 0;
// const marketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const seller = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainString].NftMarketplace;

  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEM);

  // show listed NFT recently
  // will index the events !!!
  // server to listen for those events to be fired, and we will add then to a

  // TheGraph does this in a decentralized way
  // Moralis does it in a centralized way

  return (
    <div className="container mx-auto">
      <h1 className="py-4 px-4 font-bold text-2xl">recently listed</h1>
      <div className="flex flex-wrap">
        {isWeb3Enabled ? (
          loading || !listedNfts ? (
            <div>Loading...</div>
          ) : (
            listedNfts.activeItems.map((nft) => {
              console.log(nft);
              const { price, nftAddress, tokenId, seller } = nft;
              return (
                <div className={styles.container}>
                  <NFTBox
                    price={price}
                    nftAddress={nftAddress}
                    tokenId={tokenId}
                    marketplace={marketplaceAddress}
                    seller={seller}
                  />
                </div>
              );
            })
          )
        ) : (
          <div>web3 currently not enabled</div>
        )}
      </div>
    </div>
  );
}
