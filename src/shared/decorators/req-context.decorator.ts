import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { RequestContext } from '../dto/request-context.dto';
import { createRequestContext } from '../util/createRequestContext';

export const ReqContext = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): RequestContext => {
    const request = ctx.switchToHttp().getRequest();

    return createRequestContext(request);
  },
);
