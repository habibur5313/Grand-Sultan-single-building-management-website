import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAgreementsRequest = () => {
                    const axiosSecure = useAxiosSecure()
                  const {data: requests=[],refetch} = useQuery({
                    queryKey: ['agreements'],queryFn: async() => {
                                        const res = await axiosSecure.get('/agreements')
                                        return res.data
                                         
                    }
                  })
                  return [requests,refetch]
};

export default useAgreementsRequest;