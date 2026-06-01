import type { Professional } from "../../../shared/types/professionals";

const useProfessionalsStore = () => {
  const professionals = useState<Professional[]>("professionals", () => []);
  const professionalsTotalCount = useState<number>(
    "professionalsTotalCount",
    () => 0,
  );

  const setProfessionals = (newProfessionals: Professional[]) => {
    professionals.value = newProfessionals;
  };

  const setProfessionalsTotalCount = (count: number) => {
    professionalsTotalCount.value = count;
  };

  return {
    professionals,
    professionalsTotalCount,
    setProfessionals,
    setProfessionalsTotalCount,
  };
};

export default useProfessionalsStore;
