import Loadable from 'react-loadable'
import defaultLoading from '@/components/page-loading'

export default function asyncLoad(
  loader: () => Promise<any>,
  loading = defaultLoading
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
