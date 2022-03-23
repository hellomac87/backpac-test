import * as Styled from './style';

type CommentProps = {
    comment?: string;
};

function Comment({ comment }: CommentProps) {
    if (!comment) {
        return null;
    }
    return <Styled.Container>{comment}</Styled.Container>;
}

export default Comment;
