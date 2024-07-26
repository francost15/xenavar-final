'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { Title } from '@/components';
import { updateUserProfile } from '@/actions';

type FormInputs = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();
  const { handleSubmit, register, formState: { isValid }, reset } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
    }
  });

  useEffect(() => {
    if (session?.user) {
      reset({
        name: session.user.name,
        email: session.user.email,
      });
    }
  }, [session, reset]);

  const onSubmit = async (data: FormInputs) => {
    if (session?.user) {
      const result = await updateUserProfile(session.user.id, data.name, data.email);
      if (result.ok) {
        // Refresh the session or update the UI accordingly
        setErrorMessage('');
        setSuccessMessage('Perfil actualizado correctamente');
        // Sign out and sign in to refresh the session
        setTimeout(async () => {
          await signOut({ redirect: false });
          await signIn('credentials', { redirect: false });
        }, 2000);
      } else {
        setErrorMessage(result.message || 'Error al actualizar el perfil');
        setSuccessMessage('');
      }
    }
  };

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Title title='Perfil' />
      <div className='w-96 h-full bg-white shadow-xl rounded-xl p-4'>
      {successMessage && <p className='text-white bg-green-500 p-2 rounded-md text-center'>{successMessage}</p>}
      {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2">
          <div className="flex flex-col mb-2">
            <span>Nombre</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register('name', { required: true })}
            />
          </div>
          <div className="flex flex-col mb-2">
            <span>Email</span>
            <input
              type="email"
              className="p-2 border rounded-md bg-gray-200"
              {...register('email', { required: true })}
            />
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={clsx('btn-primary', { 'btn-disabled': !isValid })}
          >
            Actualizar Perfil
          </button>
        </form>

      </div>
    </div>
  );
}
