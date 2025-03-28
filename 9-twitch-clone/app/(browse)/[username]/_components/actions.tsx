'use client';

import { toast } from 'sonner';

import { onFollow, onUnfollow } from '@/actions/follow';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { onBlock } from '@/actions/block';

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = async () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleUnfollow = async () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) =>
          toast.success(`Blocked the user ${data.blocked.username}`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  // TODO: HandleUnblock

  return (
    <>
      <Button
        disabled={isPending}
        onClick={onClick}
        variant="primary"
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      <Button
        onClick={handleBlock}
        disabled={isPending}
      >
        Block
      </Button>
    </>
  );
};
