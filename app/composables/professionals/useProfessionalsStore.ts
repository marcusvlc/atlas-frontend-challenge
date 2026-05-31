import type { Professional } from "../../../shared/types/professionals";

const useProfessionalsStore = () => {
  const professionals = useState<Professional[]>("professionals", () => []);

  const setProfessionals = (newProfessionals: Professional[]) => {
    professionals.value = newProfessionals;
  };

  return {
    professionals,
    setProfessionals,
  };
};

export default useProfessionalsStore;
