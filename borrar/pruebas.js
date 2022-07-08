/* Para mis pruebas
var alumnos = [
	{
	nombre: 'Emi',
	edad: 23,
	hobbies:['correr','dormir','nadar'],
	amigos: [
		{nombre:'Martin'},
		{nombre:'Leo'}
		]
	},
	{
	nombre:'Franco',
	edad:21,
	hobbies: ['futbol','golf'],
	amigos: [
		{nombre:'Emi'},
		{nombre:'Jimmy'},
		{nombre:'Matias'}
		]
	}
];

console.log(alumnos[0].hobbies[1]);
console.log(alumnos[1].amigos[1].nombre);

var persona ={
  nombre:'EPC',
  saludar: function(){console.log('Hola, '+this.nombre);}
};
persona.saludar();



function saludar(){
  console.log('Hola, '+this.nombre);
}

var manu = {
  nombre:'Manu',
  saludar: saludar
}

var martin = {
  nombre:'Martin',
  saludar: saludar
}

var augu = {
  nombre:'Augusto',
  saludar: saludar
}

manu.saludar();
martin.saludar();
augu.saludar();



const user = {
  username :'juan.perez',
  password :'loremipsumpwd123',
  lovesJavascript :true,
  favoriteNumber : 42
};

console.log(user.lovesJavascript);
console.log(user.username);

const passString = 'password';
const nameUsuario = 'username';
console.log(user['lovesJavascript']);
console.log(user[nameUsuario]);
console.log(user[passString]);

const nuevoUsuario = {
  esNuevo: true
}

const loveJSString = 'lovesJavascript';

nuevoUsuario.username = 'otro.nombre.de.usuario';
nuevoUsuario['password'] = '12345';
nuevoUsuario[loveJSString] = true;

console.log(nuevoUsuario.username);
console.log(nuevoUsuario['password']);
console.log(nuevoUsuario[loveJSString]);

const nuevoObjeto = {
  eliminarEstaPropiedad: true;
}

delete nuevoObjeto.eliminarEstaPropiedad;



const usuario = {
  username: 'juan.perez',
  password: 'loremipsumpwd123',
  lovesJavascript: true,
  favoriteNumber: 42,
  decirHola: function (){
    console.log(this.username + ' manda saludos');
  }
};

for (let clave in usuario){
  console.log(clave + ": " + usuario[clave]);
}

usuario.decirHola(); 

// en la consola de chrome
console.log(this===window);

this.a=37;

console.log(window.a);


var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f());


var obj = {
  nombre: 'Objeto',
  log: function (){
    this.nombre = 'Cambiado';
    console.log(this)
  
    var cambia =function( str ){
      this.nombre = str;
      console.log(this.nombre);  
    }
    cambia('Hola!!');
    console.log(this);
  }
}

console.log(obj.nombre);
obj.log();

var obj = {
  nombre: 'Objeto',
  log: function (){
    this.nombre = 'Cambiado';
    console.log(this);

    var that =this;
    
    var cambia = function ( str ){
      that.nombre = str;
    }

    cambia('Hola!!');
    console.log(this)
  }
}

obj.log();

*/

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.make);
