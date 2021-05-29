import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; //Libería de React para la creación y validación de formularios
import axios from 'axios'; // solicitudes http a una API
import Table from '../Table/Table'

import './form.scss';


export default function Form() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [repos, setRepos] = useState([]);

    const onSubmit = async (data, e) => {

        //vaciar el campo
        e.target.reset();

        const baseurl = `https://api.github.com/users/${data.usuario}/repos`;

        const response = await axios.get([baseurl]);
        // almacenamos los datos en el State
        setRepos(response.data)
        console.log(repos)

    }

    return (
     <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="formdiv-input">
                    <input
                        type="text"
                        name="Nombre"
                        className="form-div-input"
                        autoFocus
                        placeholder="Usuario GitHub"
                        {...register("usuario", { required: true })} />
                    {errors.name?.type === 'required' && "Debe introducir su usuario de GitHub"}

                    </div>

                    <div className="formdiv-btn">
                    <input className="form-div-btn" type="submit" value="Search" />

                    </div>

                </form>
            </div>
            <Table apidata={repos} />

       </>
    );
}
