import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';

import camera from '~/assets/camera.svg';

function BannerInput({ currentUrl }) {
  const { defaultValue, registerField } = useField('file');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    if (currentUrl) {
      setPreview(currentUrl);
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container hasThumbnail={Boolean(preview)}>
      <label htmlFor="file" style={{ backgroundImage: `url(${preview})` }}>
        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
        <div>
        <img src={camera} alt="Select img" />
        <span>Selecionar Imagem</span>
        </div>
      </label>
    </Container>
  );
}

export default BannerInput;

BannerInput.propTypes = {
  currentUrl: PropTypes.string,
};

BannerInput.defaultProps = {
  currentUrl: null,
};
