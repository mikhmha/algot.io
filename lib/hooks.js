import { useDocumentData } from 'react-firebase-hooks/firestore';

function useTradeDataSSR(ref, options) {
    const [value, loading, error] = useDocumentData(ref, options)
  
    if (options?.startWith && loading) {
      return [options.startWith, loading, error]
    } else {
      return [value, loading, error]
    }
  
  }