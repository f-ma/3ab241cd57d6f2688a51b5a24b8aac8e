;(function(window) {
  function init() {
    var itemElems = document.getElementsByClassName('item-on-cart');
    for (var _i = 0; _i < itemElems.length; _i++) {
      var _extend = itemElems[_i].getElementsByClassName('extend')[0];
      _extend.addEventListener('click', function(event) {
        event.stopPropagation();
      }, false);
    }
  }

  function itemOnCartClickHandle(event) {
    event.currentTarget.classList.toggle('active');
  }
  function itemExtendOnCartClickHandle(event) {
    event.stopPropagation();
  }

  init();
  //add to global
  window.itemOnCartClickHandle = itemOnCartClickHandle;
  window.itemExtendOnCartClickHandle = itemExtendOnCartClickHandle;

})(window);

;(function(window, undefined) {
  function init() {
    window.showToSaleElem = document.getElementById('show-to-sale');
    window.itemsOnCartElem = document.getElementById('items-on-cart');
    window.customerOnCartElem = document.getElementById('customer-on-cart');
    window.btnCustomerAssigningCancel = document.getElementById('btn_customer-assigning-cancel');
    window.sumUpElem = document.getElementById('sum-up');
    _initEventListener();
  }
  function _initEventListener() {
    window.btnCustomerAssigningCancel.addEventListener('click', function() {
      window.showToSaleElem.classList.remove('customer-active');
      setTimeout(function() {
        window.customerOnCartElem.addEventListener('click', toggleCustomerAssigning, false);
      }, 1);
    }, false);
    window.customerOnCartElem.addEventListener('click', toggleCustomerAssigning, false);
    window.sumUpElem.addEventListener('click', function () {
      window.showToSaleElem.classList.remove('customer-active');
      window.showToSaleElem.classList.toggle('summary-active');
      setTimeout(function() {
        window.customerOnCartElem.addEventListener('click', toggleCustomerAssigning, false);
      }, 1);
    }, false);
  }
  function toggleCustomerAssigning() {
    var searchInput = document.getElementById('search-customer-on-cart');
    searchInput.focus();
    window.showToSaleElem.classList.remove('summary-active');
    window.showToSaleElem.classList.toggle('customer-active');
    window.customerOnCartElem.removeEventListener('click', toggleCustomerAssigning, false);
  }

  init();
  //add to global
  window.toggleCustomerAssigning = toggleCustomerAssigning;

})(window, undefined);