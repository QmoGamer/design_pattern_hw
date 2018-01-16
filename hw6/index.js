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

//https://github.com/htshiang/DesignPatterns/blob/master/07.AbstractFactory/src/%E7%B6%B2%E9%A0%81%E5%B7%A5%E5%BB%A0/src/designpattern/abstractfactory/demo/Main.java

var abstractComponent = {
  name: 'default'
};

var abstractContainer = {
  items: [],

  add: function(item) {
    this.items.push(item);
  },
};

var abstractFactory = {

  abstractGetFactory: function(name) {
    switch (name) {
      case 'pokemon':

        break;
      case 'warcraft':
        break;
      default :
        appendMsg('沒有找到任何工廠');
        break;
    }
  },

  abstractShowItem: function() {

  },
};

var pokemonFactory = {
  Armor: abstractComponent.name = '小智帽',
  Weapon: abstractComponent.name = '寶貝球',

  items: abstractContainer.items,

  // add: abstractContainer.add(this.Armor),
};

// pokemonFactory.add();
var pokemonFactory = extend(pokemonFactory, abstractFactory);
console.log(pokemonFactory);
console.log(abstractFactory);

// abstractFactory.getFactory('1');




















var builder = {
  buildCPU: function() {
    console.log('組裝CPU...');
    computer.item.push('CPU');
    appendMsg('組裝CPU...');
  },

  buildMB: function() {
    console.log('組裝主機板...');
    computer.item.push('主機板');
    appendMsg('組裝主機板...');
  },

  buildPSU: function() {
    console.log('組裝電源供應器...');
    computer.item.push('電源供應器');
    appendMsg('組裝電源供應器...');
  },

  buildKB: function() {
    console.log('組裝鍵盤...');
    computer.item.push('鍵盤');
    appendMsg('組裝鍵盤...');
  },

  buildMouse: function() {
    console.log('組裝滑鼠...');
    computer.item.push('滑鼠');
    appendMsg('組裝滑鼠...');
  }
}

var computer = {
  build: function() {
    builder.buildCPU();
    builder.buildMB();
    builder.buildPSU();
    builder.buildKB();
    builder.buildMouse();
    appendMsg('組裝完成 !');
  },

  item: [],
}

var product = {
  buildComputer: function() {
    computer.build();
  },

  show: function() {
    console.log(computer.item);
    document.getElementById("msg").innerHTML = '';
    if( computer.item.length > 0) {
      computer.item.forEach(function(t) {
        appendMsg('您的電腦有' + t + ' !');
      });
      appendMsg('感謝您的購買 !');
    }
  }
}

function getComputer() {
  product.buildComputer();
}

function showComputer() {
  product.show();
}

function appendMsg(str) {
  var ele = document.createElement('div');
  ele.innerHTML = str;
  document.getElementById("msg").appendChild(ele);
}
