import { View, Text, Alert, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import InfoScreen from './InfoScreen'
import { IInfo, TInfoError } from './interface/info.interface'
import { addInfo } from '../../store/info.store'

type Props = {}

const InfoContainer = (props: Props) => {
    const [loading,setLoading] = useState<boolean>(false)
    const [form, setForm] =useState<Partial<IInfo>>({})
    const [error, setError] = useState<TInfoError>({})  
    const textInputRef = useRef<TextInput>()
    const _onCreateForm =(type: keyof IInfo , vale:any) =>{
      setLoading(false)
        setForm((data)=>({
            ...data,[type]:vale
        }))
      }

    const _onValidateForm = () => {
        const fields: (keyof IInfo)[] = ['address','age','birthdate','email','first_name','gender','last_name','phone_number']
        const errors = []
        fields?.forEach((i) => {
          if (!form?.[i]) {
            errors.push(i)
            setError((prev) => ({ ...prev, [i]: `${i} is required` }))
          }
        })
        return errors?.length === 0
    }


    const _onSubmit = () => {
      if (_onValidateForm()) {
        setLoading(true)
        addInfo(form)
        .then(() => {
          console.log('success');
          Alert.alert('Success', 'Info added successfully');
          setLoading(false);
          setForm({});
          textInputRef.current?.clear();
        })
        .catch((err: any) => {
          console.log('err', err);
        });
      }
  }

  return <InfoScreen 
    {...form}
    textInputRef={textInputRef}
    loading={loading}   
    error={error}
    onCreateForm={_onCreateForm}
    onSubmit={_onSubmit}    
  />
}

export default InfoContainer