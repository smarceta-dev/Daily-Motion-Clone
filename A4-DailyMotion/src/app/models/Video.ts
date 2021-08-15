/*
 * An interface representing a video and its data on a streaming service.
 * The data contains information regarding the videos details, statistics, content
 * creator who uploaded it, and a thumbnail of the video.
 */

export default interface Video {
  id: string;
  title: string;
  'owner.username': string;
  'owner.avatar_80_url': string;
  thumbnail_360_url: string;
  views_total: number;
  created_time: number;
}
