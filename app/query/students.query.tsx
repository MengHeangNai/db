import {useQuery, useQueryClient} from '@tanstack/react-query';
import {database} from '../services/watermelon';
import { useEffect } from 'react';

export const useStudents = () => {
  const queryClient = useQueryClient();

  const studentQuery = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const data = await database.get('students').query().fetch();
      return data.flatMap((item: any) => item._raw);
    },
  })

  useEffect(() => {
    const unsubscribe = database.get('students').query().observe().subscribe((newData) => {
      queryClient.setQueryData(['students'], newData.flatMap((item: any) => item._raw));
    });

    return () => unsubscribe.unsubscribe();
  }, [queryClient]);

  return studentQuery;
};

export const useEmployees = () => {
  const queryClient = useQueryClient();

  const employeeQuery = useQuery({
    queryKey: ['employee'],
    queryFn: async () => {
      const data = await database.get('employees').query().fetch();
      return data.flatMap((item: any) => item._raw);
    },
  }) 

  useEffect(() => {
    const unsubscribe = database.get('employees').query().observe().subscribe((newData) => {
      queryClient.setQueryData(['employee'], newData.flatMap((item: any) => item._raw));
    });

    return () => unsubscribe.unsubscribe();
  }, [queryClient]);

  return employeeQuery;

};


// export const useInfo = () => {
//   return useQuery({
//     queryKey: ['info'],
//     queryFn: async () => {
//       const data = await database.get('info').query().fetch();
//       return data.flatMap((item: any) => item._raw);
//     },
//   });
// };

export const useInfo = () => {
  const queryClient = useQueryClient();

  const infoQuery = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const data = await database.get('info').query().fetch();
      return data.flatMap((item: any) => item._raw);
    },
  });

  useEffect(() => {
    const unsubscribe = database.get('info').query().observe().subscribe((newData) => {
      queryClient.setQueryData(['info'], newData.flatMap((item: any) => item._raw));
    });

    return () => unsubscribe.unsubscribe();
  }, [queryClient]);

  return infoQuery;
};