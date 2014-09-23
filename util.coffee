matchesMethod =
  if bowser.msie
    'msMatchesSelector'
  else if bowser.firefox
    'mozMatchesSelector'
  else if bowser.webkit
    'webkitMatchesSelector'
  else
    'matches'

Element::hasClass = (klass) -> @classList.contains(klass)

Element::closestParent = (selector) ->
  node = @

  while node
    if node[matchesMethod] and node[matchesMethod](selector)
      break
    else
      node = node.parentNode

  node

pad = (num) -> if num < 10 then "0" + num else num

Date::formDate = ->
  year = @getFullYear()
  date = pad(@getDate())
  month = pad(@getMonth())

  "#{year}-#{month}-#{date}"

Array::functionalReverse = ->
  ret = new Array
  ret.unshift(a) for a in @
  ret

@extendOwn = (obj1, obj2) ->
  keys = Object.getOwnPropertyNames(obj2)
  for key in keys
    obj1[key] = obj2[key]
