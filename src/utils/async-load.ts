import Loadable from 'react-loadable';
import defaultLoading from '@/components/page-loading';

const asyncLoad: (
  loader: () => Promise<any>,
  loading?: React.FunctionComponent<LoadableExport.LoadingComponentProps>
) =>
  | (React.FunctionComponent<any> & Loadable.LoadableComponent)
  | (React.ComponentClass<any, any> & Loadable.LoadableComponent) = (
  loader,
  loading = defaultLoading
) => {
  return Loadable({
    loader,
    loading,
    delay: 200,
    timeout: 10000
  });
};

export default asyncLoad;
