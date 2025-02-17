import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent {

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
    const FirstNameValue = (document.getElementById('exampleInputFirstName1') as HTMLInputElement).value;
    const LastNameValue = (document.getElementById('exampleInputLastName1') as HTMLInputElement).value;

    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() && ! FirstNameValue.toString() && ! LastNameValue.toString() ) {
      alert('Veuillez saisir votre Nom, prénom, E-mail et mot de passe');


    }
    else if (! FirstNameValue.toString()) {
      alert('Veuillez saisir votre Prénom');
    } 
    else if (! LastNameValue.toString()) {
      alert('Veuillez saisir votre Nom');
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
  }
}
