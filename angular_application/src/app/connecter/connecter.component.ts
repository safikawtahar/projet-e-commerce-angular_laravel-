import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent {

  title = 'E-commerce';


  constructor(private http :HttpClient){
      
  }
  passwordError: boolean = false;


  password: string = '';

  verify() {
    // Votre logique de vérification ici

    // Exemple : Vérifier si le champ de mot de passe est vide
    const passwordInput = document.getElementById("exampleInputPassword1") as HTMLInputElement;

    if (passwordInput.value === "") {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      // Autre logique de validation ici
    }
  }

  verifier(event: Event): void {
    const emailValue = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() ) {
      alert('Veuillez saisir votre E-mail et votre mot de passe');


    }
    else if (! emailValue.toString()) {
      alert('Veuillez saisir votre E-mail');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Veuillez saisir votre mot de passe');
      this.passwordError = true;
    }
    else {
      this.passwordError = false;
      var user ={
        email :emailValue,
        password :mdpValue
      }
      this.http.post('https://7d0c-196-187-240-64.ngrok-free.app/api/doctor/sign-in',user).subscribe(data => {
        localStorage.setItem('auth',JSON.stringify(data))
        location.replace("http://localhost:4200/index");
        
      },err =>{
        alert('Veuillez saisir votre e-mail ou mot de passe');

      }) 
}
  }}
