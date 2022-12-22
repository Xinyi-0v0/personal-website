import { useContext } from 'react';
import NavigationContext from '../components/context/Navigation';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;