import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/features/greetings/greetingsSlice';

const Greetings = () => {
  const { greetings, status } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Here we go again</h1>
      {greetings ? (<h2>{greetings.message}</h2>) : status}
    </div>
  );
};

export default Greetings;
