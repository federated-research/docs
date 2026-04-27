/* prettier-ignore-start */
/* eslint-disable */

/******************************************************************************
 * This file was generated
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import type { PropsWithChildren } from 'react'
import type { JSX } from 'react/jsx-runtime'
import type { LikeC4Model } from 'likec4/model'
import type { DiagramView } from 'likec4/model'
import type {
  LikeC4ViewProps as GenericLikeC4ViewProps,
  ReactLikeC4Props as GenericReactLikeC4Props
} from 'likec4/react'

import type { Aux, SpecAux } from 'likec4/model';

export type $Specs = SpecAux<
  // Element kinds
  | "component"
  | "database"
  | "external_actor"
  | "internal_actor"
  | "service"
  | "system",
  // Deployment kinds
  never,
  // Relationship kinds
  never,
  // Tags
  never,
  // Metadata keys
  never
>

export type $Aux = Aux<
  "layouted",
  // Elements
  | "data_owner"
  | "egress"
  | "execution"
  | "protected_data"
  | "researcher"
  | "submission"
  | "tre"
  | "tre_admin"
  | "egress.egress_app"
  | "egress.keycloak"
  | "execution.funnel"
  | "submission.minio"
  | "submission.postgres"
  | "submission.rabbitmq"
  | "submission.sub_keycloak"
  | "submission.submission_app"
  | "tre.camunda"
  | "tre.keycloak"
  | "tre.minio"
  | "tre.postgres"
  | "tre.tre_app"
  | "tre.vault"
  | "egress.egress_app.egress_api"
  | "egress.egress_app.egress_ui"
  | "submission.submission_app.sub_api"
  | "submission.submission_app.sub_ui"
  | "tre.tre_app.tre_api"
  | "tre.tre_app.tre_ui",
  // Deployments
  never,
  // Views
  | "index"
  | "logic"
  | "view_1uzssv3"
  | "view_16chm05"
  | "view_18vymxx"
  | "view_ofy92m"
  | "view_scopmc"
  | "view_sv1m3m"
  | "view_uhumhf",
  // Project ID
  "default",
  $Specs
>

export type $ElementId = $Aux['ElementId']
export type $DeploymentId = $Aux['DeploymentId']
export type $ViewId = $Aux['ViewId']

export type $ElementKind = $Aux['ElementKind']
export type $RelationKind = $Aux['RelationKind']
export type $DeploymentKind = $Aux['DeploymentKind']
export type $Tag = $Aux['Tag']
export type $Tags = readonly $Aux['Tag'][]
export type $MetadataKey = $Aux['MetadataKey']


declare function isLikeC4ViewId(value: unknown): value is $ViewId;

declare const likec4model: LikeC4Model<$Aux>;
declare function useLikeC4Model(): LikeC4Model<$Aux>;
declare function useLikeC4View(viewId: $ViewId): DiagramView<$Aux>;

declare function LikeC4ModelProvider(props: PropsWithChildren): JSX.Element;

type IconRendererProps = {
  node: {
    id: string
    title: string
    icon?: string | undefined
  }
}
declare function RenderIcon(props: IconRendererProps): JSX.Element;

type LikeC4ViewProps = GenericLikeC4ViewProps<$Aux>;
declare function LikeC4View({viewId, ...props}: LikeC4ViewProps): JSX.Element;

type ReactLikeC4Props = GenericReactLikeC4Props<$Aux>
declare function ReactLikeC4({viewId, ...props}: ReactLikeC4Props): JSX.Element;

export {
  type LikeC4ViewProps,
  type ReactLikeC4Props,
  isLikeC4ViewId,
  useLikeC4Model,
  useLikeC4View,
  likec4model,
  LikeC4ModelProvider,
  LikeC4View,
  RenderIcon,
  ReactLikeC4
}
/* prettier-ignore-end */
