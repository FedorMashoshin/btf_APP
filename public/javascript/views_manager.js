$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $newPropertyForm.detach();
    $propertyListings.detach();
    $searchPropertyForm.detach();
    $logInForm.detach();
    $userInfo.detach();
    $signUpForm.detach();

    switch (item) {
      case 'listings':
        const middle = $('#middle')
        $propertyListings.appendTo(middle);
        break;
      case 'newProperty':
        $newPropertyForm.appendTo($main);
        break;
        case 'userInfo':
        $userInfo.appendTo($main);
        break;
      case 'searchProperty':
        const middle = $('#middle')
        $searchPropertyForm.appendTo(middle);
        break;
      case 'logIn':
        $logInForm.appendTo($main);
        break;
      case 'signUp':
        $signUpForm.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('listings');
        }, 2000);
        
        break;
      }
    }
  }
  
});