var extend = function() {
  var extended = {};

  for(key in arguments) {
    var argument = arguments[key];
    for (prop in argument) {
      if (Object.prototype.hasOwnProperty.call(argument, prop)) {
        extended[prop] = argument[prop];
      }
    }
  }

  return extended;
};


var abstractComponent = {
  name: 'default',

  abstractRenderHtml: function () {}
};

var abstractContainer = {
  items: [],

  abstractAdd: function(item) {},
};

var abstractFactory = {

  abstractGetFactory: function(name) {
    switch (name) {
      case 'pokemon':
        return extend(abstractFactory, pokemonFactory);
        break;
      case 'warcraft':
        return extend(abstractFactory, warcraftFactory);
        break;
      default :
        appendMsg('沒有找到任何工廠');
        break;
    }
  },

  abstractNewComponent: function() {},

  abstractAdd: function(item) {},

  abstractRenderHtml: function () {},
};

var pokemonFactory = {

  abstractNewComponent: function(item) {
    return extend(abstractComponent, {name: item});
  },

  abstractNewContainer: function(container) {
    var newContainer = extend(abstractContainer, {items: []});
    newContainer.abstractAdd = function(item) {
      this.items.push(item);
    }
    return newContainer;
  },

  abstractRenderHtml: function() {
    this.items.forEach(function(t) {
      appendMsg('帶上' + t.name + ' !');
    });
    appendMsg('變裝完成 !');
  },
};

var warcraftFactory = {
  
    abstractNewComponent: function(item) {
      return extend(abstractComponent, {name: item});
    },
  
    abstractNewContainer: function(container) {
      var newContainer = extend(abstractContainer, {items: []});
      newContainer.abstractAdd = function(item) {
        this.items.push(item);
      }
      return newContainer;
    },
  
    abstractRenderHtml: function() {
      this.items.forEach(function(t) {
        appendMsg('裝上' + t.name + ' !');
      });
      appendMsg('變裝完成 !');
    },
  };

function appendMsg(str) {
  var ele = document.createElement('div');
  ele.innerHTML = str;
  document.getElementById("msg").appendChild(ele);
}

/** cos pokemon */
function cosPokemon() {
  document.getElementById("msg").innerHTML = '';
  var pokemon = abstractFactory.abstractGetFactory('pokemon');
  var pokemonHat = pokemon.abstractNewComponent('小智帽');
  var pokemonWeapon = pokemon.abstractNewComponent('寶貝球');
  var pokemonBox = pokemon.abstractNewContainer();
  pokemonBox.abstractAdd(pokemonHat);
  pokemonBox.abstractAdd(pokemonWeapon);
  pokemon = extend(pokemonBox, pokemon);
  pokemon.abstractRenderHtml();
}

/** cos warcraft */
function cosWarcraft() {
  document.getElementById("msg").innerHTML = '';
  var warcraft = abstractFactory.abstractGetFactory('warcraft');
  var warcraftArmor = warcraft.abstractNewComponent('霜之鎧甲');
  var warcraftWeapon = warcraft.abstractNewComponent('霜之哀傷');
  var warcraftBox = warcraft.abstractNewContainer();
  warcraftBox.abstractAdd(warcraftArmor);
  warcraftBox.abstractAdd(warcraftWeapon);
  warcraft = extend(warcraftBox, warcraft);
  warcraft.abstractRenderHtml();
}