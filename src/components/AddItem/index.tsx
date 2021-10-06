import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddItem = ({ onEnter } : Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder="Adicionar Tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}/>
        </C.Container>
    );
}