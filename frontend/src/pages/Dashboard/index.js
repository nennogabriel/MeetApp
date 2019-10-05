import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Header, Meetup } from './styles';
import { meetupsIndexRequest } from '~/store/modules/meetups/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups.list);

  useEffect(() => {
    dispatch(meetupsIndexRequest());
  }, [dispatch]);

  return (
    <>
      <Header>
        <h1>Meus meetups</h1>
        <Link to="/meetup">
          <MdAddCircleOutline size={20} />
          Novo meetup
        </Link>
      </Header>
      {meetups === null || meetups.length === 0 ? (
        <h2> Não há Meetups cadastrados</h2>
      ) : (
        <ul>
          {meetups.map(meetup => (
            <li key={String(meetup.id)}>
              <Meetup to={`/detail/${meetup.id}`} past={meetup.past.toString()}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.dateFormatted}</span>
                  <MdChevronRight size={20} color="#fff" />
                </div>
              </Meetup>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
