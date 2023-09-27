var window
;(function (scope) {
  'use strict'

  var admonitionIcons = {
    caution: 'fas fa-fire',
    important: 'fas fa-exclamation-circle',
    note: 'fas fa-info-circle',
    tip: 'fas fa-lightbulb',
    warning: 'fas fa-exclamation-triangle',
  }
  var additionalIcons = [
    'fas fa-angle-right',
    'far fa-copy',
    'far fa-check-square',
    'fab fa-github',
    'fab fa-gitlab',
    'far fa-square',
    'fab fa-twitter',
    'fab fa-redhat',
    'fab fa-aws',
    'fab fa-amazon',
    'fab fa-microsoft',
    'fab fa-google',
    'fab fa-vaadin',
    'fab fa-stackexchange',
    'fab fa-free-code-camp',
    'fab fa-react',
    'fab fa-java',
    'fas fa-lock',
    'fas fa-heart',
    'fas fa-question-circle',
  ]
  var iconDefs = (scope.FontAwesomeIconDefs = [])
  iconDefs.admonitionIcons = admonitionIcons
  iconDefs.includes = Object.values(admonitionIcons).concat(additionalIcons)
})(window || module.exports)
