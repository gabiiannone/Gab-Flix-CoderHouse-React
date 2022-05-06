import React, {useState} from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";


const Login = () => {
 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [ isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);


    function handleChange(name, value) {
        if(name === "usuario") {
            setUser(value) 
            setHasError(false);   
        }else{
            if(value.length < 8){
                setPasswordError(true);
                setHasError(false); 
            } else{
                setPasswordError(false);
                setPassword(value);  
                setHasError(false); 
            }
           
        }
    };

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0) {
            if(param.user === "Gabriel" && param.password === "12345678"){
                const {user, password } = param;
                let ac = { user, password}; 
                let account = JSON.stringify(ac);
                localStorage.setItem("Usuario",account);
                setIsLogin(true);
            }else {
                setIsLogin(false);
                setHasError(true);
            }

        }else{ 
            setIsLogin(false);
            setHasError(true);
        }

    }
    function handleSubmit() {
        let account = {user, password}
        if(account) {
           ifMatch(account);
        }
    } 
    return(
        isLogin ?
        <div className="home_container">
        <h1>¡Hola, {user}!</h1>
        <img width="70%" src="https://sm.ign.com/t/ign_latam/news/m/mario-movi/mario-movie-chris-pratt-shares-some-extremely-fake-first-loo_rwfz.1280.jpg"/>
        <label>Felicitaciones, estás logueado.</label>
        </div>
        :

        <div className="container_login">
           
         <Title text="BIENVENIDO!"/>

         {hasError && 
         <label className="label_alert"> 
                    Su contraseña o Usuario son incorrectos,
                    o no estan registrados en nuestra plataforma.
          </label>
          }
          
         <Label text="Usuario"/>
         <Input
            attribute={{
                id: "usuario",
                name: "usuario",
                type:"text",
                placeholder:"Ingrese su usuario"

            }}
            handleChange={handleChange}
            />
         <Label text="Contraseña"/>
         <Input
            attribute={{
                id: "contraseña",
                name: "contraseña",
                type:"password",
                placeholder:"Ingrese su contraseña"

            }}
            handleChange={handleChange}
            param={passwordError}
            /> 
            {passwordError && 
            <label className="label_error"> 
           
            Contraseña inválida o incompleta
           
            </label>
             }
            <div>
            <button className="button_login" onClick={handleSubmit}>
                Ingresar
            </button>
            </div>
        </div>
    
    )

};

export default Login;