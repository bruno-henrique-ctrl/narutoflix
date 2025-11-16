import axios from "axios";
import { characterType } from "../_types/characters";

export const api = (id: string) => axios.get<characterType>(`https://naruto-br-api.site/characters/${id}`);

export const apiFull = () => axios.get<characterType[]>(`https://naruto-br-api.site/characters/`);
