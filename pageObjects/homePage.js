module.exports = {
    url: 'https://www.amazon.com',
    elements : {
        //main content
        cr8Acc : 'a[id="createAccountSubmit"]',
        streamNav : 'div[id="nav-upnav"]',
        logo : 'div[id="nav-logo"',
        amaIcon : 'a[class="a-link-nav-icon"]',
        banner : 'div[id="desktop-banner"]',
        deals : 'div[id="desktop-1"]',
        lowPrice : 'div[id="desktop-3"]',
        related : 'div[id="uber-widget-ns_KF7N85GWJ7FY7WEAAX6N_3553_"]',
        recommend : 'div[class="a-section a-spacing-base a-spacing-top-medium a-padding-none a-text-center rhf-fresh-header"]',
        dealToday : 'div[id="navSwmHoliday"]',

        // navigation menu
        account : 'div[id="nav-al-your-account"]',
        accList : {
            selector : '//*[@id="nav-link-accountList"]/span[2]',
            locateStrategy : 'xpath'
        },
        signIn : '#nav-flyout-ya-signin > a > span',
        orders : 'a[href="/gp/css/order-history/ref=nav_nav_orders_first"]',
        tryPrime : 'a[href="/gp/prime/ref=nav_prime_try_btn"]',
        cart : 'a[href="/gp/cart/view.html/ref=nav_cart"]',

        //Create account
        newNameInput : 'input[type="text"]',
        newEmailInput : 'input[type="email"]',
        newPassInput : 'inputp[id="ap_password"]',
        rePassInput : 'input[id="ap_password_check"]',
        contButton : 'input[id="continue"]',

        urName : 'label[for="ap_customer_name"]',
        urEmail : 'label[for="ap_email"]',
        urPass : 'label[for="ap_password"]',
        urRePass: 'label[for="ap_password_check"]',


        //Sign In/Out
        inputEmail : 'input[type="email"]',
        continueBut : 'input[id="continue"]',
        inputPass : 'input[type="password"]',
        signInBut : 'input[id="signInSubmit"]',
        signinText : 'span[id="a-autoid-0-announce"]',
        singOutBut : 'a[id="nav-item-signout-sa"]',
        cr8Acc : 'a[id="createAccountSubmit"]',

        srchInput : 'a[id="twotabsearchtextbox"]',
        submit : 'input[type="submit"]',

        //other content
        result : 'li[id="result_0"]',
        resultImg : 'div[id="imgTagWrapperId"]',
        itemTitle : 'span[id="productTitle"]',
        addCartBut : 'input[id="add-to-cart-button"]',
        addedCart : 'div[id="huc-v2-order-row-confirm-text"]',
        proceedCartBut : 'a[id="hlb-ptc-btn-native"]',
        cartBut : 'a[id="hlb-view-cart-announce"]',
        useAddress : 'span[id="orderSummaryPrimaryActionBtn-announce"]',
        placeOrder : 'span[id="submitOrderButtonId-announce"]',
        orderPlaced : 'div[class="a-column a-span7"]', //Thank you, your order has been placed.
        cancelItem : 'a[id="Cancel-items_1"]',
        cancelReason : 'select[name="cancel.reason"]',
        cancelButton : 'input[type="image"]',
        orderCancelled : 'div[class="a-box-inner a-alert-container"]', //This order has been cancelled.
        continueShop : 'a[href="/ref=od_aui_cancelled_keep_shop"]',

        qty : 'select[id="quantity"]',
        addListBut : 'input[id="add-to-wishlist-button-submit"]',
        popaddList : 'div[id="WLHUC_result"]',

    }
}
