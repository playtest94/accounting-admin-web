import { styled, VariantProps } from "@nextui-org/react";
import { ReactNode } from "react";

const Badge = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      active: {
        bg: '$successLight',
        color: '$success'
      },
      paused: {
        bg: '$errorLight',
        color: '$error'
      },
      vacation: {
        bg: '$warningLight',
        color: '$warning'
      }
    }
  },
  defaultVariants: {
    type: 'active'
  }
} as any);

type BadgeVariants = { type: 'active' | 'paused' | 'vacation', children: ReactNode };

const BadgeComponent = (props: BadgeVariants) => <Badge {...props} />

export default BadgeComponent