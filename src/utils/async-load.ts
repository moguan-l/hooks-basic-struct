import Loadable from 'react-loadable'
import defaultLoading from '@/components/page-loading'

export default function asyncLoad(loader: () => Promise<any>, loading = defaultLoading) {
  return Loadable({
    loader,
    loading,
    delay: 200,
    timeout: 10000,
  })
}
