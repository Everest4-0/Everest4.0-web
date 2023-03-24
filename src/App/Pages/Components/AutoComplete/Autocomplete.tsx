import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Api} from '../../../Api/Api';
import { services} from '../../../Api/services';

export const Autocomplete = ({ onChange, options: opts }: any) => {

    const [params, setParams] = useState<any>()
    const {  data , isLoading } = Api({ service: services.student.students, params });

    return <>
        <AsyncTypeahead

            placeholder='Pesquisar por Estudante...'
            onChange={onChange}
            isLoading={isLoading}
            labelKey={({ code, person, entryCode }: any) => `${code ?? entryCode ?? '00000'} - ${person?.firstName} ${person?.otherName ?? ''} ${person?.lastName}`}
            onSearch={async (query) => {
                if (query.length < 3)
                    return;
                    setParams({q:query})
            }}
            options={data}
        />
    </>
}
