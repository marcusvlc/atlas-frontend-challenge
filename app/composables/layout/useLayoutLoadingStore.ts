const useLayoutLoadingStore = () => {
  const isLoading = useState("layoutLoading", () => true);

  const setLoading = (loading: boolean) => {
    isLoading.value = loading;
  };

  return {
    isLoading,
    setLoading,
  };
};

export default useLayoutLoadingStore;
