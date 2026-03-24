use soroban_sdk::{token, Address, Env};

use crate::config;
use crate::errors::InsightArenaError;

/// Transfer `amount` stroops from the contract's own escrow balance to `recipient`.
///
/// The contract address is the implicit custodian of all staked XLM; when a
/// market is cancelled every predictor's stake is returned here.
///
/// # Errors
/// Propagates any error returned by [`config::get_config`].  Token transfer
/// panics are handled by the Soroban runtime and surface as contract failures.
pub fn refund(env: &Env, recipient: &Address, amount: i128) -> Result<(), InsightArenaError> {
    let cfg = config::get_config(env)?;
    token::Client::new(env, &cfg.xlm_token).transfer(
        &env.current_contract_address(),
        recipient,
        &amount,
    );
    Ok(())
}
