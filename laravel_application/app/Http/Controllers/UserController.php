<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User ;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{ 
    public function inscription(Request $request){
       
        $user = User::where('email', $request['email'])->first();

        if($user){
            $response['status']=0;
            $response['message'] ='Email Already exist';
            $response['code'] = 409;
             return response()->json($response);
            
        }
        else {
        // Créez un nouveau user avec les données fournies dans la requête
        $user = User::create([
            'name'     => $request->name,
            'num_tel'  => $request->num_tel,
            'email'    => $request->email,
            'password' =>bcrypt($request->password), // Enregistrez le mot de passe crypté
        ]);
        $response['status']=1;
        $response['message'] ='User registered successfully';
        $response['code'] = 200;
        return response()->json($response);

              }

         return response()->json($response);
        
    }
    public function connexion(Request $request){

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
               ]);  
               if (Auth::attempt($credentials)) 
               {
                // Récupérer l'utilisateur authentifié
                $user = Auth::user();
                $token = JWTAuth::fromUser($user); // Générer un token JWT à partir de l'utilisateur authentifié
                
                $response['data'] = ['token' => $token];
                $response['status'] = 1;
                $response['code'] = 200;
                $response['message'] = 'Login successfully';
                return response()->json($response);
                }else {
        
                // Gérer le cas où l'authentification échoue
                $response['status'] = 0;
                $response['data'] = null;
                $response['code'] = 401;
                $response['message'] = 'Email or password is incorrect';
                return response()->json($response);
            }
        }
    }