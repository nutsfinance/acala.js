// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { AccountId32, Call, H160, H256 } from '@acala-network/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { BTreeMap, Bytes, Null, Option, U256, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesTradingPair, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, KaruraRuntimeScheduledTasks, KaruraRuntimeSessionKeys, ModuleAssetRegistryModuleAssetIds, ModuleAssetRegistryModuleAssetMetadata, ModuleAuctionManagerCollateralAuctionItem, ModuleCdpEngineRiskManagementParams, ModuleDexTradingPairStatus, ModuleEvmModuleAccountInfo, ModuleEvmModuleCodeInfo, ModuleHomaModuleStakingLedger, ModuleIncentivesPoolId, ModuleLoansPosition, ModuleXcmInterfaceModuleXcmInterfaceOperation, NutsfinanceStableAssetStableAssetPoolInfo, OrmlNftClassInfo, OrmlNftTokenInfo, OrmlOracleModuleTimestampedValue, OrmlRewardsPoolInfo, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTraitsAuctionAuctionInfo, OrmlVestingVestingSchedule, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletCollectiveVotes, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReleases, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletMultisigMultisig, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletSchedulerScheduledV3, PalletTipsOpenTip, PalletTreasuryProposal, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV1AbridgedHostConfiguration, PolkadotPrimitivesV1PersistedValidationData, PolkadotPrimitivesV1UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpRuntimeDigest, XcmV1MultiLocation, XcmVersionedMultiLocation } from './types-lookup';
import type { Observable } from '@polkadot/types/types';

declare module '@polkadot/api-base/types/storage' {
  export interface AugmentedQueries<ApiType extends ApiTypes> {
    acalaOracle: {
      /**
       * If an oracle operator has fed a value in this block
       **/
      hasDispatched: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Raw values for each oracle operators
       **/
      rawValues: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<OrmlOracleModuleTimestampedValue>>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Up to date combined value from Raw Values
       **/
      values: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<OrmlOracleModuleTimestampedValue>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    assetRegistry: {
      /**
       * The storages for AssetMetadatas.
       * 
       * AssetMetadatas: map AssetIds => Option<AssetMetadata>
       **/
      assetMetadatas: AugmentedQuery<ApiType, (arg: ModuleAssetRegistryModuleAssetIds | { Erc20: any } | { StableAssetId: any } | { ForeignAssetId: any } | { NativeAssetId: any } | string | Uint8Array) => Observable<Option<ModuleAssetRegistryModuleAssetMetadata>>, [ModuleAssetRegistryModuleAssetIds]> & QueryableStorageEntry<ApiType, [ModuleAssetRegistryModuleAssetIds]>;
      /**
       * The storages for EvmAddress.
       * 
       * Erc20IdToAddress: map Erc20Id => Option<EvmAddress>
       **/
      erc20IdToAddress: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H160>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The storages for MultiLocations.
       * 
       * ForeignAssetLocations: map ForeignAssetId => Option<MultiLocation>
       **/
      foreignAssetLocations: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Option<XcmV1MultiLocation>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The storages for CurrencyIds.
       * 
       * LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
       **/
      locationToCurrencyIds: AugmentedQuery<ApiType, (arg: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<AcalaPrimitivesCurrencyCurrencyId>>, [XcmV1MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation]>;
      /**
       * Next available Foreign AssetId ID.
       * 
       * NextForeignAssetId: ForeignAssetId
       **/
      nextForeignAssetId: AugmentedQuery<ApiType, () => Observable<u16>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available Stable AssetId ID.
       * 
       * NextStableAssetId: StableAssetPoolId
       **/
      nextStableAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auction: {
      /**
       * Index auctions by end time.
       **/
      auctionEndTime: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Stores on-going and future auctions. Closed auction are removed.
       **/
      auctions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlTraitsAuctionAuctionInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Track the next auction ID.
       **/
      auctionsIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auctionManager: {
      /**
       * Mapping from auction id to collateral auction info
       * 
       * CollateralAuctions: map AuctionId => Option<CollateralAuctionItem>
       **/
      collateralAuctions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ModuleAuctionManagerCollateralAuctionItem>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Record of the total collateral amount of all active collateral auctions
       * under specific collateral type CollateralType -> TotalAmount
       * 
       * TotalCollateralInAuction: map CurrencyId => Balance
       **/
      totalCollateralInAuction: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Record of total target sales of all active collateral auctions
       * 
       * TotalTargetInAuction: Balance
       **/
      totalTargetInAuction: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will always
       * be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authority: {
      nextTaskIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      savedCalls: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[Call, Option<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    cdpEngine: {
      /**
       * Mapping from collateral type to its risk management params
       * 
       * CollateralParams: CurrencyId => RiskManagementParams
       **/
      collateralParams: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<ModuleCdpEngineRiskManagementParams>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Mapping from collateral type to its exchange rate of debit units and
       * debit value
       * 
       * DebitExchangeRate: CurrencyId => Option<ExchangeRate>
       **/
      debitExchangeRate: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Global interest rate per sec for all types of collateral
       * 
       * GlobalInterestRatePerSec: Rate
       **/
      globalInterestRatePerSec: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Timestamp in seconds of the last interest accumulation
       * 
       * LastAccumulationSecs: u64
       **/
      lastAccumulationSecs: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    cdpTreasury: {
      /**
       * Current total debit value of system. It's not same as debit in CDP
       * engine, it is the bad debt of the system.
       * 
       * DebitPool: Balance
       **/
      debitPool: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The expected amount size for per lot collateral auction of specific
       * collateral type.
       * 
       * ExpectedCollateralAuctionSize: map CurrencyId => Balance
       **/
      expectedCollateralAuctionSize: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    collatorSelection: {
      /**
       * Fixed deposit bond for each candidate.
       * 
       * CandidacyBond: Balance
       **/
      candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The (community, limited) collation candidates.
       * 
       * Candidates: BTreeSet<AccountId>
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Desired number of candidates.
       * 
       * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
       * DesiredCandidates: u32
       **/
      desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The invulnerable, fixed collators.
       * 
       * Invulnerables: Vec<AccountId>
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from the kicked candidate or the left candidate to session index.
       * 
       * NonCandidates: map AccountId => SessionIndex
       **/
      nonCandidates: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Session points for each candidate.
       * 
       * SessionPoints: map AccountId => u32
       **/
      sessionPoints: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[H256, PalletDemocracyVoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletDemocracyPreimageStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, H256, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<PalletDemocracyReleases>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dex: {
      /**
       * Initial exchange rate, used to calculate the dex share amount for founders of provisioning
       * 
       * InitialShareExchangeRates: map TradingPair => (ExchangeRate, ExchangeRate)
       **/
      initialShareExchangeRates: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Liquidity pool for TradingPair.
       * 
       * LiquidityPool: map TradingPair => (Balance, Balance)
       **/
      liquidityPool: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Provision of TradingPair by AccountId.
       * 
       * ProvisioningPool: double_map TradingPair, AccountId => (Balance,
       * Balance)
       **/
      provisioningPool: AugmentedQuery<ApiType, (arg1: AcalaPrimitivesTradingPair, arg2: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair, AccountId32]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair, AccountId32]>;
      /**
       * Status for TradingPair.
       * 
       * TradingPairStatuses: map TradingPair => TradingPairStatus
       **/
      tradingPairStatuses: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ModuleDexTradingPairStatus>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dexOracle: {
      /**
       * Average prices for TradingPair.
       * 
       * AveragePrices: map TradingPair => (AveragePrice0, AveragePrice1, LastCumulative0,
       * LastCumulative1, LastUpdatePriceTimestamp, InteralToUpdatePrice)
       **/
      averagePrices: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<Option<ITuple<[u128, u128, U256, U256, u64, u64]>>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Price cumulatives for TradingPair.
       * 
       * Cumulatives: map TradingPair => (Cumulative0, Cumulative1, LastUpdateTimestamp)
       **/
      cumulatives: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[U256, U256, u64]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    emergencyShutdown: {
      /**
       * Open final redemption flag
       * 
       * CanRefund: bool
       **/
      canRefund: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Emergency shutdown flag
       * 
       * IsShutdown: bool
       **/
      isShutdown: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    evm: {
      /**
       * The EVM accounts info.
       * 
       * Accounts: map EvmAddress => Option<AccountInfo<T>>
       **/
      accounts: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<ModuleEvmModuleAccountInfo>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * The storages for EVM contracts.
       * 
       * AccountStorages: double_map EvmAddress, H256 => H256
       **/
      accountStorages: AugmentedQuery<ApiType, (arg1: H160 | string | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<H256>, [H160, H256]> & QueryableStorageEntry<ApiType, [H160, H256]>;
      /**
       * The code info for EVM contracts.
       * Key is Keccak256 hash of code.
       * 
       * CodeInfos: H256 => Option<CodeInfo>
       **/
      codeInfos: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ModuleEvmModuleCodeInfo>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The code for EVM contracts.
       * Key is Keccak256 hash of code.
       * 
       * Codes: H256 => Vec<u8>
       **/
      codes: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Bytes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The storage usage for contracts. Including code size, extra bytes and total AccountStorages
       * size.
       * 
       * Accounts: map EvmAddress => u32
       **/
      contractStorageSizes: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<u32>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * Extrinsics origin for the current transaction.
       * 
       * ExtrinsicOrigin: Option<AccountId>
       **/
      extrinsicOrigin: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available system contract address.
       * 
       * NetworkContractIndex: u64
       **/
      networkContractIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    evmAccounts: {
      /**
       * The Substrate Account for EvmAddresses
       * 
       * Accounts: map EvmAddress => Option<AccountId>
       **/
      accounts: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<AccountId32>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * The EvmAddress for Substrate Accounts
       * 
       * EvmAddresses: map AccountId => Option<EvmAddress>
       **/
      evmAddresses: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<H160>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    financialCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    financialCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homa: {
      /**
       * The internal of relaychain block number of relaychain to bump local current era.
       * 
       * LastEraBumpedRelayChainBlock: value: T::BlockNumber
       **/
      bumpEraFrequency: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The rate of Homa drawn from the staking reward as commission.
       * The draw will be transfer to TreasuryAccount of Homa in liquid currency.
       * 
       * CommissionRate: value: Rate
       **/
      commissionRate: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The estimated staking reward rate per era on relaychain.
       * 
       * EstimatedRewardRatePerEra: value: Rate
       **/
      estimatedRewardRatePerEra: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The fixed fee rate for redeem request is fast matched.
       * 
       * FastMatchFeeRate: value: Rate
       **/
      fastMatchFeeRate: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The relaychain block number of last era bumped.
       * 
       * LastEraBumpedBlock: value: T::BlockNumber
       **/
      lastEraBumpedBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Requests to redeem staked currencies.
       * 
       * RedeemRequests: Map: AccountId => Option<(liquid_amount: Balance, allow_fast_match: bool)>
       **/
      redeemRequests: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u128, bool]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The current era of relaychain
       * 
       * RelayChainCurrentEra : EraIndex
       **/
      relayChainCurrentEra: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum amount of bonded staking currency for a single sub on relaychain to obtain the
       * best staking rewards.
       * 
       * SoftBondedCapPerSubAccount: value: Balance
       **/
      softBondedCapPerSubAccount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The staking ledger of Homa subaccounts.
       * 
       * StakingLedgers map: u16 => Option<StakingLedger>
       **/
      stakingLedgers: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Option<ModuleHomaModuleStakingLedger>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The total staking currency to bond on relaychain when new era,
       * and that is available to be match fast redeem request.
       * ToBondPool value: StakingCurrencyAmount
       **/
      toBondPool: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of void liquid currency. It's will not be issued,
       * used to avoid newly issued LDOT to obtain the incoming staking income from relaychain.
       * And it is guaranteed that the current exchange rate between liquid currency and staking
       * currency will not change. It will be reset to 0 at the beginning of the `rebalance` when new
       * era starts.
       * 
       * TotalVoidLiquid value: LiquidCurrencyAmount
       **/
      totalVoidLiquid: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The records of unbonding by AccountId.
       * 
       * Unbondings: double_map AccountId, ExpireEraIndex => UnbondingStakingCurrencyAmount
       **/
      unbondings: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
      /**
       * The total unclaimed redemption.
       * 
       * UnclaimedRedemption value: StakingCurrencyAmount
       **/
      unclaimedRedemption: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homaCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homaCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    honzon: {
      /**
       * The authorization relationship map from
       * Authorizer -> (CollateralType, Authorizee) -> Authorized
       * 
       * Authorization: double_map AccountId, (CurrencyId, T::AccountId) => Option<Balance>
       **/
      authorization: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]> | [AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<Option<u128>>, [AccountId32, ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]>]> & QueryableStorageEntry<ApiType, [AccountId32, ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    idleScheduler: {
      nextTaskId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Some documentation
       **/
      tasks: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<KaruraRuntimeScheduledTasks>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    incentives: {
      /**
       * Mapping from pool to its claim reward deduction rate.
       * 
       * ClaimRewardDeductionRates: map Pool => DeductionRate
       **/
      claimRewardDeductionRates: AugmentedQuery<ApiType, (arg: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array) => Observable<u128>, [ModuleIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId]>;
      /**
       * Mapping from pool to its fixed reward rate per period.
       * 
       * DexSavingRewardRates: map Pool => SavingRatePerPeriod
       **/
      dexSavingRewardRates: AugmentedQuery<ApiType, (arg: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array) => Observable<u128>, [ModuleIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId]>;
      /**
       * Mapping from pool to its fixed incentive amounts of multi currencies per period.
       * 
       * IncentiveRewardAmounts: double_map Pool, RewardCurrencyId => RewardAmountPerPeriod
       **/
      incentiveRewardAmounts: AugmentedQuery<ApiType, (arg1: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [ModuleIncentivesPoolId, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The pending rewards amount, actual available rewards amount may be deducted
       * 
       * PendingMultiRewards: double_map PoolId, AccountId => BTreeMap<CurrencyId, Balance>
       **/
      pendingMultiRewards: AugmentedQuery<ApiType, (arg1: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<BTreeMap<AcalaPrimitivesCurrencyCurrencyId, u128>>, [ModuleIncentivesPoolId, AccountId32]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    loans: {
      /**
       * The collateralized debit positions, map from
       * Owner -> CollateralType -> Position
       * 
       * Positions: double_map CurrencyId, AccountId => Position
       **/
      positions: AugmentedQuery<ApiType, (arg1: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ModuleLoansPosition>, [AcalaPrimitivesCurrencyCurrencyId, AccountId32]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * The total collateralized debit positions, map from
       * CollateralType -> Position
       * 
       * TotalPositions: CurrencyId => Position
       **/
      totalPositions: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<ModuleLoansPosition>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[WrapperKeepOpaque<Call>, AccountId32, u128]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    operatorMembershipAcala: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    ormlNFT: {
      /**
       * Store class info.
       * 
       * Returns `None` if class info not set or removed.
       **/
      classes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlNftClassInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Next available class ID.
       **/
      nextClassId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available token ID.
       **/
      nextTokenId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u64>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Store token info.
       * 
       * Returns `None` if token info not set or removed.
       **/
      tokens: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<OrmlNftTokenInfo>>, [u32, u64]> & QueryableStorageEntry<ApiType, [u32, u64]>;
      /**
       * Token existence check by owner and class ID.
       **/
      tokensByOwner: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u64 | AnyNumber | Uint8Array) => Observable<Null>, [AccountId32, u32, u64]> & QueryableStorageEntry<ApiType, [AccountId32, u32, u64]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See [`Pallet::set_custom_validation_head_data`] for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
       * which will result the next block process with the new validation code. This concludes the upgrade process.
       * 
       * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, u64, u32]>>>, [u32, XcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedMultiLocation]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    preimage: {
      /**
       * The preimages stored by this pallet.
       **/
      preimageFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    prices: {
      /**
       * Mapping from currency id to it's locked price
       * 
       * map CurrencyId => Option<Price>
       **/
      lockedPrice: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    rewards: {
      /**
       * Record reward pool info.
       * 
       * map PoolId => PoolInfo
       **/
      poolInfos: AugmentedQuery<ApiType, (arg: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array) => Observable<OrmlRewardsPoolInfo>, [ModuleIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId]>;
      /**
       * Record share amount, reward currency and withdrawn reward amount for
       * specific `AccountId` under `PoolId`.
       * 
       * double_map (PoolId, AccountId) => (Share, BTreeMap<CurrencyId, Balance>)
       **/
      sharesAndWithdrawnRewards: AugmentedQuery<ApiType, (arg1: ModuleIncentivesPoolId | { Loans: any } | { Dex: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, BTreeMap<AcalaPrimitivesCurrencyCurrencyId, u128>]>>, [ModuleIncentivesPoolId, AccountId32]> & QueryableStorageEntry<ApiType, [ModuleIncentivesPoolId, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduledV3>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<KaruraRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, KaruraRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sessionManager: {
      /**
       * The current session duration offset.
       * 
       * DurationOffset: T::BlockNumber
       **/
      durationOffset: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current session duration.
       * 
       * SessionDuration: T::BlockNumber
       **/
      sessionDuration: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from block number to new session index and duration.
       * 
       * SessionDurationChanges: map BlockNumber => (SessionIndex, SessionDuration)
       **/
      sessionDurationChanges: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u32, u32]>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stableAsset: {
      poolCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      pools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<NutsfinanceStableAssetStableAssetPoolInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: This storage item is explicitly unbounded since it is never intended to be read
       * from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tips: {
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletTipsOpenTip>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPause: {
      /**
       * The paused transaction map
       * 
       * map (PalletNameBytes, FunctionNameBytes) => Option<()>
       **/
      pausedTransactions: AugmentedQuery<ApiType, (arg: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<Null>>, [ITuple<[Bytes, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[Bytes, Bytes]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      /**
       * The alternative fee swap path of accounts.
       * 
       * AlternativeFeeSwapPath: map AccountId => Option<Vec<CurrencyId>>
       **/
      alternativeFeeSwapPath: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The global fee swap path.
       * The path includes `DefaultFeeTokens` trading path, and foreign asset trading path.
       * 
       * GlobalFeeSwapPath: map CurrencyId => Option<Vec<CurrencyId>>
       **/
      globalFeeSwapPath: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The next fee multiplier.
       * 
       * NextFeeMultiplier: Multiplier
       **/
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The size of fee pool in native token. During `initialize_pool` this amount of native token
       * will be transferred from `TreasuryAccount` to sub account of `PalletId`.
       * 
       * PoolSize: map CurrencyId => Balance
       **/
      poolSize: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The balance threshold to trigger swap from dex, normally the value is gt ED of native asset.
       * 
       * SwapBalanceThreshold: map CurrencyId => Balance
       **/
      swapBalanceThreshold: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The exchange rate between the given currency and native token.
       * This value is updated when upon swap from dex.
       * 
       * TokenExchangeRate: map CurrencyId => Option<Ratio>
       **/
      tokenExchangeRate: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    unknownTokens: {
      /**
       * Abstract fungible balances under a given location and a abstract
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, Bytes]>;
      /**
       * Concrete fungible balances under a given location and a concrete
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, XcmV1MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Vesting schedules of an account.
       * 
       * VestingSchedules: map AccountId => Vec<VestingSchedule>
       **/
      vestingSchedules: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<OrmlVestingVestingSchedule>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmInterface: {
      /**
       * The dest weight limit and fee for execution XCM msg sended by XcmInterface. Must be
       * sufficient, otherwise the execution of XCM msg on relaychain will fail.
       * 
       * XcmDestWeightAndFee: map: XcmInterfaceOperation => (Weight, Balance)
       **/
      xcmDestWeightAndFee: AugmentedQuery<ApiType, (arg: ModuleXcmInterfaceModuleXcmInterfaceOperation | { XtokensTransfer: any } | { HomaWithdrawUnbonded: any } | { HomaBondExtra: any } | { HomaUnbond: any } | { ParachainFee: any } | string | Uint8Array) => Observable<ITuple<[u64, u128]>>, [ModuleXcmInterfaceModuleXcmInterfaceOperation]> & QueryableStorageEntry<ApiType, [ModuleXcmInterfaceModuleXcmInterfaceOperation]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmpQueue: {
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages that exceeded max individual message weight budget.
       * 
       * These message stay in this storage map until they are manually dispatched via
       * `service_overweight`.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
       * available free overweight index.
       **/
      overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xTokens: {
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
