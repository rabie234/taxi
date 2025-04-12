import {
  Authorize,
  IDField,
  PagingStrategies,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { ServiceAuthorizer } from './service.authorizer';
import { ServiceDTO } from './service.dto';

@ObjectType('ServiceCategory')
@UnPagedRelation('services', () => ServiceDTO, {
  pagingStrategy: PagingStrategies.NONE,
})
@Authorize(ServiceAuthorizer)
export class ServiceCategoryDTO {
  @IDField(() => ID)
  id!: number;
  name!: string;
}
