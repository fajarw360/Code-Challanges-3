const prompt = require('prompt-sync')();
var PersonAgeLogic= require('./Domain/PersonAge/Person.Age')

function ask(){
var name = prompt ('Silahkan Masukkan Nama Kamu: ')
var nik = prompt ('Silahkan Masukkan 16 digit NIK: ')
var bod = prompt ('Silahkan Masukkan 8 digit tanggal lahir format yyyy-mm-dd: ')
var person = new PersonAgeLogic(name, nik, bod);
console.log(person.getWeekType())
console.log(`Saat ini berumur ${person.getAge()}`)
console.log(person.personByAge())
}

ask();
