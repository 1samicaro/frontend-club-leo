import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
import { getAdditionalType, getCountries, getDocumentType, getPersonType, register } from '../../services/registerService'
import { Link,  useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../../assets/logoblack.png'

import "./SignUp.css"
import permiso from './AUTORIZACION A MENOR PARA INGRESAR COMO MIEMBRO DE CLUBLEO.docx'
import { DebounceInput } from 'react-debounce-input';
import { getSearchPerson } from '../../services/searchPersonService';
import { getCountry } from '../../stateManagement/actions/getCities';
import { getTypePerson } from '../../stateManagement/actions/getTypePerson';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    name: [],
    documentNumber: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    DocumentTypeId: 0,
    RoleId: 3,
    PersonTypeId: 2,
    CountryId: 0,
    AdditionalTypeId: 3,
    username: "",
    Partner: "",
    docs: []
};

export default function SignUp() {

    const [showPass, setShowPass] = useState(false)

    const dispatch = useDispatch()

    const [params] = useSearchParams()
    const inviteName = params.get("name") ?? ""

    async function country (){
        const [country, personType] = await Promise.all([
            getCountries(),
            getPersonType(),
        ]
        )
        dispatch(getCountry(country))
        dispatch(getTypePerson(personType))
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
        country();}, [])

    const navigate = useNavigate()

    const notify = () => {
        toast('Usuario creado satisfactoriamente, sera redirigido para realizar su pago para validar la inscripción!', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyDocument = () => {
        toast('Usuario creado satisfactoriamente, estaremos enviando a tu correo un mensaje cuando tus documentos sean verificados!', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyError = () => {
        toast('Error creando el usuario,  revise los datos!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const countries = useSelector(state=>state.countriesReducer.country)
    const loading = useSelector(state=>state.countriesReducer.loading)
    const personType = useSelector(state=>state.personTypeReducer.typePerson)

    const [firstName, setfirstName]= useState()
    const [firstLastName, setFirstLastName]= useState()
    const [fileName, setFileName] = useState([])
    const [filePhoto, setFilePhoto] = useState([])
    const [permission, setPermission] = useState(false)
    const [partner, setPartner] = useState(false)

    const [input, setInput] = useState(initialState)
    const [errors, setErrors] = useState({});

    const [value, setValue]= useState("");
    const [additionalType, setAdditionalType] = useState()
    const [document, setDocument] = useState()
    const [type, setType] = useState()
    const [pass, setPassword] = useState()
    const [passValid, setPassValid] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // const dispatch = useDispatch()
    function onChangeCategory(value){
        setIsLoading(false)
        setErrors({})
        setInput(prev=>({...prev, Categories:value}))
    }

    function userName (input, e){
        setfirstName(prev=>({...prev, [input]:e.target.value}))
    }
    function userLastName (input, e){
        setFirstLastName(prev=>({...prev, [input]:e.target.value}))
    }

    function handleInputChange(input, e){
        setIsLoading(false)
        setInput(prev=>({...prev, [input]:e.target.value}))
    }
    function handleInputDiscount(inside, e){
        setIsLoading(false)
        setErrors({})
        input.discount[inside]=parseInt(e.target.value)
    }
    function passwordComparation(e){
        setIsLoading(false)
        const patron =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$"@ñÑç|~€,;:¬`+´[º·_{}!%*?&.¿'¡()=/#-])[A-Za-z\d$@Ññç|"~€,;:¬`+´[º·_{}!%*?&.¿'¡()=/#-]{8,15}/
        // const patron =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
        // const patron =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if(patron.test(e.target.value)){
            setPassValid(1)
            setPassword(e.target.value)
        }
        else{
            setPassValid(2)
        }
    }
    function passwordVerificated(input, e){
        setIsLoading(false)
        setPassValid(0)
        setErrors({})
        if(pass===e.target.value){
            setInput(prev=>({...prev, [input]:e.target.value}))
        }
        else{
            setErrors(prev=>({...prev, [input]:"Las contraseñas son diferentes"}))
        }
    }

    const getSuggestionValue = (suggestion) =>{
        return `${suggestion.name}`
    }

    const onChange=(e, {newValue})=>{
        setIsLoading(false)
        setValue(newValue);
    }

    const inputProps={
        placeholder:"Ciudad",
        value,
        onChange
    };

    function date(inside, e){
        setIsLoading(false)
        setPermission(false)
        setErrors(prev=>({...prev, [inside]:""}))
        const fechaActual = new Date()
        const birth = new Date(e.target.value)
        if(input.PersonTypeId==="1"){
            if((birth.getMonth())===11 && (birth.getDate())===31){
                const date = `${(birth.getFullYear()+1)}/01/01`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getMonth()+1)<10 && (birth.getDate()+1)<10){
                const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getMonth()+1)<10){
                const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getDate()+1)<10){
                const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if ((birth.getMonth()+1)>=10 && (birth.getDate()+1)>=10){
                const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
        }
        if(true){
            if((fechaActual.getFullYear()-birth.getFullYear())>=14){
                if((fechaActual.getFullYear()-birth.getFullYear())<18){
                    setPermission(true)
                }
                if((birth.getMonth())===11 && (birth.getDate())===31){
                    const date = `${(birth.getFullYear()+1)}/01/01`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getMonth()+1)<10 && (birth.getDate()+1)<10){
                    const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getMonth()+1)<10){
                    const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getDate()+1)<10){
                    const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if ((birth.getMonth()+1)>=10 && (birth.getDate()+1)>=10){
                    const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
            }
            else {
                setErrors(prev=>({...prev, [inside]:"Debe ser mayor de 14 años"}))
            }
        }
    }

    async function countrySelect (input,id){
        setIsLoading(false)
        setInput(prev=>({...prev, [input]:id.target.value}))
        const documentType = await getDocumentType(id.target.value, 2)
        setDocument(documentType)
    }

    async function additionalTypeInfo(){
        setIsLoading(false)
        const typeInfo = await getAdditionalType(3)
        setType(3)
        setAdditionalType(typeInfo)
    }

    async function handleInputSend(e){
        setErrors({})
        setPartner(false)
        setIsLoading(false)
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            if(userSearch.remainingReferrals>0){
                setPartner(false)
                setInput(prev=>({...prev, Partner:e.target.value}))
            }
            else{
                setErrors(prev=>({...prev, Partner:"El socio que te invito ya concreto sus veinte socios directos, ingresa un socio diferente o dejalo en blanco y continua "}))
                setPartner(true)
            }
        }
        if(userSearch.message==="Error getting user"){
            setErrors(prev=>({...prev, Partner:"Este Usuario no Existe"}))
            setPartner(true)
        }
    }
    async function handleInputUserName(e){
        if(inviteName) setInput(prev=>({...prev, Partner:inviteName}))
        setErrors({})
        setIsLoading(false)
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            setErrors(prev=>({...prev, username:"Error creando el usuario,  revise los datos"}))
        }
        if(userSearch.message==="Error getting user"){
            setInput(prev=>({...prev, username:e.target.value}))
        }
    }

    // Subida de archivos

    const onUpload = (e) => {
        e.preventDefault()
        setIsLoading(false)
        const cloudName = "dsuxfsvt1"; // replace with your own cloud name
        const uploadPreset = "ml_default"; // replace with your own upload preset

        const myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                folder: 'Archivos',  // folder
                sources: [ "local"], // restrict the upload sources to URL and local files
                clientAllowedFormats: ["pdf", "docx"], //restrict uploading to image files only
                maxImageFileSize: 2000000,  //restrict file size to less than 2MB
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setFileName([...fileName, result.info.original_filename])
                    input.docs.push(result.info.url)
                    setErrors({})
                    myWidget.close()
                }
            }
            )
            myWidget.open()
    }

    const selectPay = [
        {label: 'MercadoPago', value: 'MercadoPago'},
        {label: 'payPal', value: 'PayPal'},
        {label: 'Nequi', value: 'Nequi'},
        {label: 'Daviplata', value: 'Daviplata'},
    ]
    const [numberPay, setNumberPay] = useState(false)

    async function paySelect (input,value){
        setNumberPay(true)
        setIsLoading(false)
        setInput(prev=>({...prev, [input]:value.target.value}))
    }
    async function payAccount (input,value){
        setInput(prev=>({...prev, [input]:value.target.value}))
    }

    const onUploadPhoto = (e) => {
        e.preventDefault()
        setIsLoading(false)
        const cloudName = "dsuxfsvt1"; // replace with your own cloud name
        const uploadPreset = "ml_default"; // replace with your own upload preset

        const myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                folder: 'Archivos',  // folder
                sources: [ "local"], // restrict the upload sources to URL and local files
                clientAllowedFormats: ["jpg"], //restrict uploading to image files only
                maxImageFileSize: 2000000,  //restrict file size to less than 2MB
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setFilePhoto([...filePhoto, result.info.original_filename])
                    setInput(prev=>({...prev, profilePic:result.info.url}))
                    setErrors({})
                    myWidget.close()
                }
            }
            )
            myWidget.open()
    }

    async function onSend (e){
        e.preventDefault()
        input.name=[]
        let errores = {}
        setIsLoading(true)
        if(firstName === "") errores.name="Ingrese nombre"
        if(input.documentNumber === "" ) errores.documentNumber="Ingrese Número de documento"
        if(input.email === "") errores.email="Ingrese Correo"
        if(input.phone === "") errores.phone="Ingrese Telefono"
        if(input.password === "") errores.password="Ingrese Contraseña"
        if(input.birthDate === "") errores.birthDate="Ingrese fecha"
        if(input.DocumentTypeId === 0) errores.DocumentTypeId="Ingrese Tipo de documento"
        if(input.CountryId === 0) errores.CountryId="Ingrese País"
        if(partner) errores.Partner="Usuario Socio no existe"
        if(input.username === "") errores.username="Ingrese Nombre de Usuario"
        if(Object.keys(errores).length === 0){
            if(firstLastName){
                input.name.push(firstLastName.lastName)
            }
            if(firstName){
                input.name.push(firstName.name)
            }
            try {
                const user = await register(input);
                if(user[0]?.path==="name") {
                    input.name=[]
                    setErrors(prev=>({...prev, name:"Nombre necesario"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="email") {
                    input.name=[]
                    setErrors(prev=>({...prev, email:"Correo invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="phone") {
                    input.name=[]
                    setErrors(prev=>({...prev, phone:"Número telefonico invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="password") {
                    input.name=[]
                    setErrors(prev=>({...prev, password:"Contraseña invalida, debe ser alfanumerica con símbolo"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="birthDate") {
                    input.name=[]
                    setErrors(prev=>({...prev, birthDate:"Fecha de nacimiento incorrecta"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="username") {
                    input.name=[]
                    setErrors(prev=>({...prev, username:"Nombre de usuario invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="documentNumber") {
                    input.name=[]
                    setErrors(prev=>({...prev, documentNumber:"Documento invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="representName") {
                    input.name=[]
                    input.representName=[]
                    setErrors(prev=>({...prev, representName:"Nombre del representante invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="representEmail") {
                    input.name=[]
                    input.representName=[]
                    setErrors(prev=>({...prev, representEmail:"Correo del representante invalido"}))
                    setIsLoading(false)
                }
                if(user.message ==="Error creating user") {
                    input.name=[]
                    notifyError()
                    setIsLoading(false)
                }
                if(user.createdAt){
                    if(permission || (input.RoleId === "4" && input.PersonTypeId==="1") || (input.RoleId === "3" && input.PersonTypeId==="1")||(input.RoleId === "4" && input.PersonTypeId==="2")){
                        notifyDocument()
                        setInput({
                            name: [
                            ],
                            documentNumber: "",
                            email: "",
                            phone: "",
                            password: "",
                            birthDate: "",
                            DocumentTypeId: 0,
                            RoleId: 0,
                            PersonTypeId: 0,
                            CountryId: 0,
                            AdditionalTypeId: 0,
                            username: "",
                            Partner: "string",
                            docs: []
                        })
                        setTimeout(() => {
                            navigate('/')
                        },"6000");
                    }
                    else{
                        notify()
                        const obj ={
                            username:input.username,
                            password:input.password
                        }
                        setTimeout(() => {
                            navigate('/paid', {state:obj})
                        },"6000");
                    }
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        else{
            setErrors(errores)
        }
    }
    //////el socio que te invito ya concreto sus diez socios directos, ingresa un socio diferente o dejalo en blanco

    return (
        <div className="contenedor_registro" >
            <ToastContainer />
            <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                </Link>
            </nav>
            {loading? <Spinner animation="grow" variant="info" />:
            <div className="container-fluid"  id="registro">
                <h3><b>Vincúlate como socio del Club Mundial de Lectura</b></h3>
                <br />
                {inviteName ? <h4><em>Eres invitado por {inviteName}</em></h4>: <></>}
                <br/>
                <form id='login' className='formRegister'>


                        {errors.RoleId ? <span className='textError'>{errors.RoleId}</span> : <></>}
                    <div >
                        
                    <label className="l-01"> <h6> <b></b>Diligencia por favor todos los datos</h6></label>
                    <br />
                    </div>


                    <div >
                        <label className="l-01"> <h6>Lugar de residencia</h6></label>

                        <div>
                            <select 
                            className="form-select" aria-label="Default select example"
                            onChange={(e)=>countrySelect("CountryId",e)}>
                                <option value='----'> Selecciona país </option>
                                {countries?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}
                            </select>
                            {errors.CountryId ? <span className='textError'>{errors.CountryId}</span> : <></>}
                        </div>
                        <br />
                    </div>
                  

                <div>


                <label className="l-01"> <h6>Datos</h6></label>

                    {input.PersonTypeId === "1" &&
                    <div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre de la empresa</span>

                            <input
                            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=>userName("name", e)}/>
                        </div>
                            {errors.name ? <span className='textError'>{errors.name}</span> : <></>}
                    </div>
                    }
                    {true &&
                        <div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombres</span>

                                <input
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                type="text" onChange={(e)=>userName("name", e)}/>
                            </div>
                                {errors.name ? <span className='textError'>{errors.name}</span> : <></>}
                           
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Apellidos</span>

                                <input
                                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                type="text" onChange={(e)=>userLastName("lastName", e)}/>
                            </div>
                                {errors.lastName ? <span className='textError'>{errors.lastName}</span> : <></>}
                                {errors.lastName2 ? <span className='textError'>{errors.lastName2}</span> : <></>}
                        </div>
                    }

                    <div>
                        <select 
                        className="form-select" aria-label="Default select example"
                        onChange={(e)=>handleInputChange("DocumentTypeId", e)}>
                            <option value='----'> Tipo de documento </option>
                            {document?.map((document)=> <option value={document.id} key={document.id}>{document.name}</option>)}
                        </select>
                    </div>
                        {errors.DocumentTypeId ? <span className='textError'>{errors.DocumentTypeId}</span> : <></>}
                        <br />



                    <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Número de documento</span>

                        <input
                        input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        onChange={(e)=>handleInputChange("documentNumber", e)}/>
                    </div>
                    {errors.documentNumber ? <span className='textError'>{errors.documentNumber}</span> : <></>}


                    {input.RoleId === "4" && input.PersonTypeId==="1"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como vendedor,
                        por favor anexa el <b>documento de existencia de empresa, representante legal o nit</b> de la empresa
                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                    {input.RoleId === "4" && input.PersonTypeId==="2"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como vendedor,
                        por favor anexa la <b>cédula o tarjeta profesional</b>
                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                    {input.RoleId === "3" && input.PersonTypeId==="1"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como socio juridico,
                        por favor anexa el <b>Representante Legal</b> de la empresa.

                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                        <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Fecha de nacimiento</span>
                        <input
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        type="date" onChange={(e)=>date("birthDate", e)}/>
                        </div>

                        {errors.birthDate ? <span className='textError'>{errors.birthDate}</span> : <></>}
                        {permission?
                        <div className="form-floating mb-3">
                            <br />
                            <a href={permiso} download>Descargar Permiso</a>
                            <br />
                            <br />
                            <div className="container text-center">
                            Al ser mayor de 14 años y menor de 18 es necesario un permiso para continuar, por favor descargue el archivo, llénelo y subir el documento
                            </div>
                            <br />
                            <button
                            className="btn btn-secondary btn-lg"
                            onClick={onUpload}>Subir documento</button>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                        </div>:<></>}

                        <div  className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Correo electrónico</span>
                                <input
                                input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                onChange={(e)=>handleInputChange("email", e)}/>
                        </div>
                        {errors.email ? <span className='textError'>{errors.email}</span> : <></>}

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Número de telefóno</span>
                            <input
                            input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=>handleInputChange("phone", e)}/>
                        </div>
                        {errors.phone ? <span className='textError'>{errors.phone}</span> : <></>}

                        {input.RoleId === "4"?
                        <div className="form-floating mb-3">
                            <br />
                            <button
                            className="btn btn-secondary btn-lg"
                            onClick={onUploadPhoto}>Subir Foto</button>
                            <br />
                            <br />
                            <div className="container text-center">
                            Si deseas subir una foto para que los usuarios que requeriran tus servicios te conozcan
                            </div>
                            {filePhoto.length? filePhoto.map(file=> <span className='textValid'>Foto: {file}, </span> ): <></>}
                        </div>:<></>}
                        {input.RoleId === "4"?
                        <div  className="form-floating mb-3">
                            <textarea
                            className="form-control"
                            type="email" onChange={(e)=>handleInputChange("description", e)}/>
                            <label htmlFor="floatingInput">Escribe una breve descripción de quien eres y servicios que ofreces</label>
                        </div>:<></>}
                </div>
                    <div>
                        <label className="l-01"> <h6>Por cuál medio deseas tu pago</h6></label>
                        <div>
                            <select 
                            className="form-select" aria-label="Default select example"
                            onChange={(e)=>paySelect("transferType",e)}
                        >
                                <option value='----'> Sitio para pagarte </option>
                                {selectPay?.map((pay)=> <option value={pay.value} key={pay.value}>{pay.label}</option>)}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div>
                    {numberPay? <div  className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Número de cuenta o usuario</span>
                        <input
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        type="text" onChange={(e)=>payAccount("transferId", e)}/>
                    </div>
                    :<></>}
                    </div>
                <div>
                <br />
                <label className="l-01"> <h6>Datos de vinculación a Club Leo</h6></label>
                    {inviteName? <></> :<div   className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Usuario que te invita</span>
                        <DebounceInput
                        type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        debounceTimeout={500} onChange={(e)=>handleInputSend(e)}/>
                    </div>}

                    {errors.Partner ? <span className='textError'>{errors.Partner}</span> : <></>}

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Crea tu usuario</span>

                        <DebounceInput className="form-control" 
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        debounceTimeout={500} onChange={(e)=>handleInputUserName(e)}/>
                    </div>
                        {errors.username ? <span className='textError'>{errors.username}</span> : <></>}

                    <div className="container text-center">
                    Tu contraseña por seguridad debe tener mínimo 8 carácteres, que incluye una mayúscula, un número y un carácter especial
                    </div>    

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Contraseña</span>
                        <input
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        type={showPass ? "text" : "password"} onChange={(e)=>passwordComparation(e)}
                        />
                    </div>


                        {errors.password ? <span className='textError'>{errors.password}</span> : <></>}
                        {passValid===1?<span className='textValid'>Contraseña valida</span> : <></>}
                        {passValid===2?<span className='textError'>La contraseña no cumple con lo solicitado</span>:<></>}

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Confirmar contraseña</span>
                        <input
                        className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                        type={showPass ? "text" : "password"} onChange={(e)=>passwordVerificated("password", e)}/>
                    </div>
                        {errors.password ? <span className='textError'>{errors.password}</span> : <></>}
                    
                        {/* aqui empieza ese ojo, el onclick es el que hace que se dispare el evento de cambio para ver o no */}
                        <div className="position-absolute pointer pwd-icon flex-end" onClick={() => setShowPass(!showPass)}>
                            {showPass ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>} Ver contaseñas
                        </div>
                        {/* aqui termina */}

                        <br />
                        <br />
                        <br />

                    <div className="container text-center">
                    Cualquier información falsa o incorrecta dará lugar a la anulación de la vinculación.
                    </div>
                    <br />

                    <div className="container text-center">
                    Al hacer clic en <b>Registrarse</b>, aceptas los
                    <a href="/Terms" className="m-0"> Términos y condiciones de uso</a> de Club Leo.
                    </div>
                    <br />

                    {!isLoading? <button className="btn btn-primary btn-lg" onClick={onSend}>Registrarse</button> : <Spinner animation="grow" variant="info" />}
                    <br />
                    <br />
                </div>


                </form>
            </div>
            }
        <br />
        
    </div>
    )
}