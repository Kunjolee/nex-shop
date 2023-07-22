var myStr = 'https://www.telus.com/my-rewards/thankyou/redeemed/3834616';
if (myStr.indexOf('/my-rewards/thankyou') > 0) {
    console.log(7, 'rewards');
} else if (myStr.indexOf('/commerce/thank-you') > 0) {
    console.log(7, 'transaction');
} else if (myStr.indexOf('/simswap/step-4') > 0) {
    console.log(7, 'sim swap');
} else if (
    myStr.indexOf('/mobility/manage-rate-plan/success') > 0 ||
    myStr.indexOf('/mobility/plans-and-devices/rate-plan-change/success') > 0 ||
    myStr.indexOf('/phone-number/success') > 0
) {
    console.log(7, 'rate plan change');
} else if (myStr.indexOf('/profile/address/confirmation') > 0) {
    console.log(7, 'billing address change');
} else {
    var preAuthFlow = /payments\/pre-authorized\/(credit|debit)\/success/;
    if (!!myStr.match(preAuthFlow)) {
        console.log(7, 'preauthorized payments');
    }
}
