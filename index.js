var builder = {
  buildCPU: function() {
    console.log('組裝CPU...');
    computer.item.push('CPU');
    // document.getElementById("msg").appendChild(document.createElement('div').innerHTML = '123');
  },

  buildMB: function() {
    console.log('組裝主機板...');
    computer.item.push('主機板');
    document.getElementById("msg").textContent = '123';
  },

  buildPSU: function() {
    console.log('組裝電源供應器...');
    computer.item.push('電源供應器');
  },

  buildKB: function() {
    console.log('組裝鍵盤...');
    computer.item.push('鍵盤');
  },

  buildMouse: function() {
    console.log('組裝滑鼠...');
    computer.item.push('滑鼠');
  }
}

var computer = {
  build: function() {
    builder.buildCPU();
    builder.buildMB();
    builder.buildPSU();
    builder.buildKB();
    builder.buildMouse();
  },

  item: [],
}

var product = {
  buildComputer: function() {
    computer.build();
  },

  show: function() {
    console.log(computer.item);
  }
}

function getComputer() {
  product.buildComputer();
}

function showComputer() {
  product.show();
}
