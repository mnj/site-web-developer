import { Button, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (formdata: any) => {
        console.log(formdata)
    
        try {
            const url = "https://asdawdawdawdadawdawdad.azurewebsites.net/api/sendmsg";
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            };

            fetch(url, options)
            .then(response => {
            if (response.ok) {
            console.log('Email sent successfully');
            } else {
            console.error(`Error sending email: ${response.status} ${response.statusText}`);
            }
            })
            .catch(error => {
            console.error(`Error sending email: ${error}`);
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <TextInput placeholder='Navn' {...register("Navn", { required: true, min: 5 })} />
            <TextInput placeholder='Email' {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <TextInput placeholder='Telefon' {...register("Telefon", { required: true, maxLength: 12 })} />
            <Textarea rows={8} placeholder='Besked' {...register("Besked", { required: true, min: 9 })} />

            <Button type='submit'>
                Send besked
            </Button>
        </form>
    );
}
