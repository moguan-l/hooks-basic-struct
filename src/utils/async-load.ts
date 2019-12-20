import Loadable from 'react-loadable'
import { PageLoading } from '@/components'

export default function asyncLoad(
  loader: () => Promise<any>,
  loading = PageLoading
):
  | (React.ComponentClass<unknown, any> & Loadable.LoadableComponent)
  | (React.FunctionComponent<any> & Loadable.LoadableComponent) {
  return Loadable({
    loader,
    loading,
    delay: 200,
    timeout: 10000,
  })
}
