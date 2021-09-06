import { CircularProgress } from '@material-ui/core';
import { LoadingText, SpinnerContainer, SpinnerWrapper } from './Spinner.styles';

const Spinner = () => {
    return (
        <SpinnerContainer>
            <SpinnerWrapper>
                <LoadingText>Loading...</LoadingText>
                <CircularProgress />
            </SpinnerWrapper>
        </SpinnerContainer>
    );
};

export default Spinner;
