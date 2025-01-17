import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAgreement = () => {
                    const axiosSecure = useAxiosSecure()
                    const {user} = useContext(AuthContext)
                  const {data: agreements={}} = useQuery({
                    queryKey: ['agreements',user?.email],queryFn: async() => {
const res = await axiosSecure.get(`/agreements/${user?.email}`)
return res.data

                    }
                  })
                  return {agreements}
};

export default useAgreement;